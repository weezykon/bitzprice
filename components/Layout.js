import Head from 'next/head';
import Navbar from '../components/Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitPrize</title>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css" rel="stylesheet" integrity="sha384-Bo21yfmmZuXwcN/9vKrA5jPUMhr7znVBBeLxT9MA4r2BchhusfJ6+n8TLGUcRAtL" crossorigin="anonymous"></link>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;
