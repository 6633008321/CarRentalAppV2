import CarCatalog from "@/components/CarCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResutls = {
    success: true,
    count: 2,
    data: [
        {
            _id: "65f6b22f5632416655b18c71",
            model: "Accord",
            description: "Honda Accord",
            picture:
                "https://drive.google.com/uc?id=1Vsq3yGo0TbJtNnD-Q-GmIKEPhi774W_O",
            seats: 4,
            doors: 4,
            largebags: 2,
            smallbags: 2,
            automatic: true,
            dayRate: 2500,
            __v: 0,
            id: "65f6b22f5632416655b18c71",
        },
        {
            _id: "65f6b2745632416655b18c74",
            model: "Civic",
            description: "Honda Civic",
            picture:
                "https://drive.google.com/uc?id=1qZjh3CmMFGEik3lcPFZZCif58q4cqSFe",
            seats: 4,
            doors: 4,
            largebags: 2,
            smallbags: 1,
            automatic: true,
            dayRate: 1800,
            __v: 0,
            id: "65f6b2745632416655b18c74",
        },
    ],
};

describe('CarCatalog', () => {
    it('should have correct number of cars', async () => {
        const carCatalog = await CarCatalog({carJson: mockResutls})
        render(carCatalog)
        await waitFor(
            ()=>{
                const carImages = screen.queryAllByRole('img')
                expect(carImages).toHaveLength(2)
            }
        )
    })
 })