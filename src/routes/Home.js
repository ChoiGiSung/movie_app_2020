import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";


class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {//async ,await �񵿱⿡ ���� �͵�
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        //ó�� movies�� ������ ���� �޾Ƽ� json�� �о�� ���� ���� ��ο� �����Ͱ� �� �ִ�
        this.setState({ movies: movies, isLoading: false });
    }

    componentDidMount() { //������Ʈ�� ó�� ����Ʈ �ɶ� ȣ��
        this.getMovies(); //axios.get�� �����Ƿ� async�� componentDidMount �տ� ������ �Լ��� ���� ���߿� ȣ�� �ϴ���
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div>
            )
                : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
        </section>);
    }
}




export default Home;
