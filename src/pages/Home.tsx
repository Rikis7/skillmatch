import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-background text-foreground flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">SkillMatch</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Connect. Collaborate. Create.
        </p>
        <p className="text-md text-muted-foreground">
          SkillMatch is your platform for discovering like-minded developers, designers, and creators to build meaningful projects together.
        </p>
        <p className="text-md text-muted-foreground">
          Whether you're looking to contribute to open-source, find freelance gigs, or just sharpen your skills—this is your space to grow.
        </p>
        <p className="text-sm text-muted-foreground">
          🚀 Ready to take your skills to the next level? <br />
          <a href="/signup" className="text-primary underline">Create an account</a> or <a href="/login" className="underline">Login</a> to get started.
        </p>
      </div>
    </div>
  );
};

export default Home;
