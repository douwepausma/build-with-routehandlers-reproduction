/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  try {
    const res = await fetch('http://localhost:3000/api/model');
  } catch (error) {
    console.log(error);
  }
  
  return null;
}
