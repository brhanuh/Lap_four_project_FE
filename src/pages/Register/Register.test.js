// import axios from "axios";
// jest.mock("axios");
// import Register from ".";

// describe("Headlines", () => {
//   beforeEach(() => jest.resetAllMocks());

//   const stubStories = { message: "success" };

//   test("it makes a request to the api on load and renders returned headlines", async () => {
//     axios.post.mockReturnValueOnce({ stubStories });
//     render(<Register />);
//     expect(axios.post).toHaveBeenCalledWith(expect.stringMatching(/articles/));
//     // const headlines = await screen.findAllByRole("listitem");
//     // expect(headlines[0].textcontent).toBe("Test Story 1");
//   });

//   //   test("it renders an error on failed api request", async () => {
//   //     axios.get.mockRejectedValue(new Error("Bad Things"));
//   //     render(<Register />);
//   //     const error = await screen.findByRole("alert");
//   //     expect(error).toBeInTheDocument();
//   //   });
// });
