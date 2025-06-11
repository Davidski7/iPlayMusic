import { useEffect, useState } from 'react'
import SplashScreen from '../componets/splashscreen'
import Login from '../componets/login'
import '../style/App.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="app-content">
          <Login />
        </div>
      )}
    </>
  )
}