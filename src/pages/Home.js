
import { Best } from "../components/Best/Best";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import {Navbar} from "../components/NavigationBar/Navbar";
import { Todo } from "../components/Todo/Todo";
export const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Best />
    <Todo />
    <Footer />
    </>
  )
}
