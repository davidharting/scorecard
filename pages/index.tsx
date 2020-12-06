import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scorecard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Scorecard</h1>
        <button>Create a new scorecard.</button>

        <form>
          <label htmlFor="roomCode">
            Join a scorecard by entering a scorecard code
          </label>
          <input name="roomCode" type="text"></input>
          <button type="submit">Join room</button>
        </form>
      </main>
    </div>
  );
}
