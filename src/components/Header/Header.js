import React from 'react'
import { Rate } from '../Rate/Rate'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { HiOutlineSearch } from 'react-icons/hi'

export const Header = ({ setTextSearch, setRateSearching, rateSearching }) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Rate setRateSearching={setRateSearching} rating={rateSearching} />
                    <HiOutlineSearch style={{ marginLeft: "840px" }} />
                    <input type="text" name="" id="" onChange={(e) => setTextSearch(e.target.value)} />
                </Container>
            </Navbar>
        </div>
    )
}
