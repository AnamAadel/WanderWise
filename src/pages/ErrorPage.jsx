import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container mx-auto flex justify-center items-center flex-col'>
        <img src="https://i.pinimg.com/564x/f0/18/e8/f018e86a42d3fca558d8e52a12311d0c.jpg" alt="" className='max-w-xl' />
        <Link to='/' className='btn btn-primary mt-4'>Go Home</Link>
    </div>
  )
}

export default ErrorPage