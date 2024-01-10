import React from "react";

interface AppProps {
  name: string;
  heroName: string;
  children: React.ReactNode;
}

const Greet = ({ name, heroName, children }: AppProps) => {
  return (
    <div>
      <p>
        Hello {name} a.k.a {heroName}
      </p>
      {children}
    </div>
  );
};

export default Greet;
