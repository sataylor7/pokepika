/* eslint-disable @typescript-eslint/no-explicit-any */
// this isn't properly typed but I am not really sure how to do it
type Props = {
  handleOnClick: (name: string) => any
}
function Header({ handleOnClick }: Props) {
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
