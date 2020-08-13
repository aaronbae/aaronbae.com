import Link from 'next/link'
import { page_to_skip } from '../../library/format';
import { useSelector } from 'react-redux'
import { pagination_array } from '../../library/format'
import '../../styles/Blog/pagination.css'

export default function Pagination() {
  const total_pages = useSelector(state => state.BlogReducer.total_pages)
  const current_page = useSelector(state => state.BlogReducer.current_page)

  return (
    <div className="pagination">
      <Link 
        href={{pathname: '/blog', query :{ skip: page_to_skip(1, total_pages) }}}
      >
        <div className="anchor-wrapper"><a className="page">FIRST</a></div>
      </Link>
      {pagination_array(current_page, total_pages).map((page, index) =>
        <Link 
          key={index}
          href={{pathname: '/blog', query :{ skip: page_to_skip(page, total_pages) }}}
        >
          <div className={current_page===page?"anchor-wrapper current": "anchor-wrapper"}><a className="page">{page}</a></div>
        </Link>
      )}
      <Link 
        href={{pathname: '/blog', query :{ skip: page_to_skip(total_pages, total_pages) }}}
      >
        <div className="anchor-wrapper"><a className="page">LAST</a></div>
      </Link>
    </div>
  )
}