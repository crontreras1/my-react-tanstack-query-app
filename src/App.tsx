import { lazy, useState, useTransition } from "react"
import { useCoureses } from "./hooks/useCourses"

const CourseList = lazy(() => import('./components/CourseList'))

const App: React.FC = () => {
  const { data: courses, isLoading, error } = useCoureses()

  const [ currentPage, setCurrentPage ] = useState(1)
  const coursesPerPage = 2

  const [ isPending, startTransition ] = useTransition()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: { error.message}</div>
  if (!courses) return <div>courses not found</div>

  return (
    <section>
      <CourseList courses={} />

      <div>
        {
          Array.from({ length: Math.ceil(courses.length / coursesPerPage ) }, (_, index) => (
            <button 
              key={ index }
              onClick={ () => {
                startTransition(() => {
                  setCurrentPage(index + 1)
                })
              }}
            >
              { index + 1 }
            </button>
          ))
        }
      </div>
      { isPending && <div>Loading new page...</div> }
    </section>
  )
}

export default App
