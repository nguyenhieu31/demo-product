export default async function Waiting(timer) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer)
  })
}