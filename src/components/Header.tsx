function Header({ handleOnClick }) {
  return (
    <header className=" w-full  bg-gray-100 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-md t">Starter Pokemon by generations</h1>
        <button type="button" onClick={() => handleOnClick('gen1')}>
          Gen 1 Starters
        </button>
        <button type="button" onClick={() => handleOnClick('gen2')}>
          Gen 2 Starters
        </button>
        <button type="button" onClick={() => handleOnClick('gen3')}>
          Gen 3 Starters
        </button>
        <button type="button" onClick={() => handleOnClick('gen4')}>
          Gen 4 Starters
        </button>
      </div>
    </header>
  )
}

export default Header
