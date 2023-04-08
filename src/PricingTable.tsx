import Table from 'react-bootstrap/Table';

function PricingTable() {
    return (
        <Table bgcolor={"#FFFFFF"} striped bordered hover size="sm">
            <thead>
            <tr>
                <th id={"colorizedTitle"}>Product</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Standard Backpack (One Alarm)</td>
                <td>125$</td>
            </tr>
            <tr>
                <td>Premium Backpack (3 Alarms and metal Shield)</td>
                <td>375$</td>
            </tr>
            <tr>
                <td>Legendary Backpack (10 Alarms, carbon exterior walls, automated pepper spray) </td>
                <td>1560$</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default PricingTable;