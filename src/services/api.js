const mockMessages = [
  {
    incoming: true,
    message: "Hi Samantha"
  },
  {
    incoming: false,
    message: "Hey this is Samantha"
  },
  {
    incoming: true,
    message: "I know."
  }
]

export const getMockData = () => (
  new Promise(resolve => setTimeout(() => resolve(mockMessages),1000))
)
