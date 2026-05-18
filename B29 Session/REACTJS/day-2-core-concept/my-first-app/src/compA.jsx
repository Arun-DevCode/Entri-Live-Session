function CompA() {
  console.log("I created component A!");

  const title = <h1>Welcome to JSX</h1>;

  return (
    <div>
      {title}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        blanditiis cum atque est illo quaerat, eveniet numquam culpa, sapiente
        error, quod facere tempore at aspernatur perferendis dicta fuga
        asperiores! Architecto?
      </p>
    </div>
  );
}

export default CompA;

// import - a function what return that will access by another function

// export - a function exports that another function can use by import
