import Header from "../components/Header";
import Navbar from "../islands/Navbar";
import ProductList from "../components/ProductList";
import Location from "../components/Location";

export default function Index() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <ProductList></ProductList>
            <Location></Location>
        </>
    )
}