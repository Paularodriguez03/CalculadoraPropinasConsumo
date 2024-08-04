const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
];

type TipPersentageFormProps = {
  tip: number,
  setTip: React.Dispatch<React.SetStateAction<number>>
}

export const TipPersentageForm = ({tip, setTip}: TipPersentageFormProps) => {

  

  return (
    <div>

      <h3 className="font-black text-xl">Propina</h3>
      <form>
        {
          tipOptions.map((option) => (
            <div className="flex items-center my-2" key={option.id}>
              <input
                type="radio"
                name="tip"
                id={option.id}
                value={option.value}
                className="w-4 h-4"
                onChange={(e) => setTip(+e.target.value)}
                checked={option.value === tip}
              />
              <label htmlFor={option.id} className="ml-2">{option.label}</label>
            </div>
          ))}
      </form>
    </div>
  )
}
