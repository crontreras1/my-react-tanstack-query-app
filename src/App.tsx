import { lazy } from "react"
import { useCoureses } from "./hooks/useCourses"

const CourseList = lazy(() => import('./components/CourseList'))

const App: React.FC = () => {
  const { data: courses, isLoading, error } = useCoureses()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error: { error.message}</div>

  if (!courses) return <div>courses not found</div>

  return (
    <>
      <CourseList courses={} />
    </>
  )
}

export default App
