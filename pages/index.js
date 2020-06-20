import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices'
import Layout from '../components/Layout'

const Index = (props) => (
    <div>
        <Layout>
            Bitcoin Price
            <Prices bpi={props.bpi} />
        </Layout>
    </div>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    // console.log(data.bpi.USD);
    return {
        bpi: data
    }
}

export default Index;
