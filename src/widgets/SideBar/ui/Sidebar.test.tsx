import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar/Sidebar";
import {renderWithTranslation} from "../../../shared/lib/renderWithTranslation/renderWithTranslation";

describe('sidebar tests', () => {
    it('render sidebar', () =>{
        renderWithTranslation(<Sidebar />)
        const toggleButton = screen.getByTestId('toggleButton')
        const sideBar = screen.getByTestId('sidebar')
        expect(sideBar).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(sideBar).toHaveClass('collapsed')
        fireEvent.click(toggleButton)
        expect(sideBar).not.toHaveClass('collapsed')
    })
})
