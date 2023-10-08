const {
  addBookHandler,
  viewAllBooksHandler,
  detailBookwithIdHandler,
  editBookwithIdHandler,
  deleteBookwithIdHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: viewAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailBookwithIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookwithIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookwithIdHandler
  }
]

module.exports = routes
