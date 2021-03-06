import React, { useContext, useState } from "react";
import { IngredientsContext, REMOVE_INGREDIENT, ADD_INGREDIENT, ADD_TO_ORDER_CALZONE, ADD_TO_ORDER_PIZZA } from "../Providers/IngredientsContext";
import { Table, Jumbotron, Container, Button, Input } from "reactstrap";
import NavLayout from "./NavLayout";

const Ingredients = () => {
    const [state, dispatch] = useContext(IngredientsContext);
    const [nameInput, setNameInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");

    return (
        <>
            <NavLayout />
            <Container>
                <Jumbotron className="col-10 my-3">
                    <h3>Ingredinece</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Název</th>
                                <th>Kategorie</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.ingredients.map(
                                    (item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <Button
                                                className="btn-danger mr-1"
                                                onClick={() =>
                                                    dispatch({
                                                        type: REMOVE_INGREDIENT,
                                                        index: index
                                                    })}>
                                                X
                                            </Button>
                                            <Button
                                                className="btn-success mr-1"
                                                onClick={() =>
                                                    dispatch({
                                                        type: ADD_TO_ORDER_PIZZA,
                                                        name: item.name,
                                                        category: item.category,
                                                    })}>
                                                PIZZA
                                            </Button>
                                            <Button
                                                className="btn-success mr-1"
                                                onClick={() =>
                                                    dispatch({
                                                        type: ADD_TO_ORDER_CALZONE,
                                                        name: item.name,
                                                        category: item.category,
                                                    })}>
                                                CALZONE
                                            </Button>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                    <h5>Přidat ingredienci</h5>
                    <Input
                        className="my-3"
                        placeholder="Název"
                        value={nameInput}
                        onChange={e => { setNameInput(e.target.value) }}
                    ></Input>
                    <Input
                        className="my-3"
                        placeholder="Kategorie"
                        value={categoryInput}
                        onChange={e => { setCategoryInput(e.target.value) }}
                    ></Input>
                    <Button className="btn-success my-3" onClick={() => {
                        dispatch({
                            type: ADD_INGREDIENT,
                            name: nameInput,
                            category: categoryInput,
                        });
                        setNameInput("");
                        setCategoryInput("");
                    }}>Přidat</Button>
                </Jumbotron>
            </Container>
        </>
    )
}
export default Ingredients;