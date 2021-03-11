import React from "react-bootstrap";
import { Table, thead, tr, th, tbody, Container } from "react-bootstrap";
import "./TableOne.css";
function Tab() {
    return (
        <div class="row mt-4 ">
            <Table striped bordered hover className="formu">
                <thead>
                    <tr>
                        <th>Cupcake name</th>
                        <th>Vanilla</th>
                        <th>Caramel</th>
                        <th>chocolate strawberry</th>
                        <th>Dark chocolate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price $</td>
                        <td>10</td>
                        <td>15</td>
                        <td>13</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </Table>
            <div className=" row mt-4 video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Nk7_uKku1cw"
                    frameborder="0"
                    allowfullscreen=""
                ></iframe>
            </div>
        </div>
    );
}

export default Tab;
