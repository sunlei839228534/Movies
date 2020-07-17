import React, { Component } from 'react'
import TabelHeader from '../common/TabelHeader'
import TabelBody from '../common/TabelBody'
import Like from '../common/Like'
import { Link } from 'react-router-dom'

class MoviesTabel extends Component {
  columns = [
    { path: 'title', label: "Title",content: movie => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>},
    { path: 'genre.name', label: "Genre" },
    { path: 'numberInStock', label: "Stock" },
    { path: 'dailyRentalRate', label: "Rate" },
    { path: "like",content: movie => <Like liked={movie.liked} onClickLike={() => this.props.onClickLike(movie)} />, label: "" },
    { path: "delete",content: movie => (
      <button
      onClick={() => this.props.onhandleDelete(movie)}
      className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ) ,label: "" }
  ]
  render() {
    const { movies } = this.props
    return (
      <table className="table">
        <TabelHeader
          columns={this.columns}
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
        />
        <TabelBody
          columns={this.columns}
          data={movies}
        />
      </table>
    )
  }
}

export default MoviesTabel;