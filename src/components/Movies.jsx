import React, { Component } from 'react';
import _ from 'lodash'
import {Link} from 'react-router-dom'

import ListGroup from '../common/ListGroup'
import SearchBox from '../common/SearchBox'
import Pagination from '../common/Pagination'
import MoviesTabel from './MoviesTabel'
import { paginate } from '../utils/paginate'
import { getMovies } from '../api/fakeMovieService'
import { getGenres } from '../api/fakeGenreService'


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {
      name: 'All Genres'
    },
    searchQuery: '',
    sortColumn: {
      path: 'title',
      order: 'asc'
    }
  }
  componentDidMount() {
    const genres = [{name:'All Genres',_id: '1211'}, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    })
  }
  render() {
    const { length: count, } = this.state.movies
    if (count === 0) return <p>There are no Movies in the database</p>

    // const filtered = this.state.selectedGenre && this.state.selectedGenre.name !== "All Genres" ? this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id) : this.state.movies

    // const sorted =  _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order])
    // const movies = paginate(sorted, this.state.currentPage, this.state.pageSize)
    const {movies,filtered} = this.getPagedData()
    return (
      <div className="row" style={{margin: 20}}>
        <div className="col-2">
          <ListGroup
          selectedItem={this.state.selectedGenre}
          items={this.state.genres}
          onItemSelected={this.handleGenresSelect}
          />
        </div>
        <div className="col">
          <Link
          className="btn btn-primary m-2"
          to="/movie/new">
            New Movies
          </Link>
          <p>Showing {filtered.length} movies in the database</p>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearchChange} />
          <MoviesTabel
          sortColumn={this.state.sortColumn}
          movies={movies}
          onClickLike={this.handleClickLike}
          onhandleDelete={this.handleDelete}
          onSort={this.handleSort}
          />
          <Pagination
            itemCount={filtered.length}
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            onPageChange={this.onPageChange}
          /></div>
      </div>
    )
  }
  getPagedData = () => {
    const { pageSize,currentPage,sortColumn,selectedGenre,searchQuery,movies:allMovies} = this.state

    let filtered = allMovies

    if(searchQuery) {
      filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    }else if(selectedGenre && selectedGenre._id && selectedGenre.name !== "All Genres") {
      filtered = allMovies.filter(m=> m.genre._id === selectedGenre._id)
    }
    const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order])
    const movies = paginate(sorted,currentPage,pageSize)

    return {movies,filtered}

  }
  handleSearchChange = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: "",
      currentPage: 1
    })
  }
  handleGenresSelect = genre =>{
    this.setState({
      selectedGenre: genre,
      searchQuery: "",
      currentPage: 1
    })
  }
  handleSort = sortColumn =>{
    this.setState({sortColumn})
  }
  onPageChange = page => {
    this.setState({
      currentPage: page
    })
  }
  handleClickLike = movie => {
    const movies = [...this.state.movies]
    const Index = movies.indexOf(movie)
    movies[Index].liked = !movies[Index].liked
    this.setState({
      movies
    })
  }
  handleDelete = item => {
    const movies = this.state.movies.filter((movie) => {
      return movie._id !== item._id
    })
    this.setState({
      movies
    })
  }
}

export default Movies