const GroundSelector = ({ grounds, selected, onSelect }) => {
    return (
        <div className="flex gap-4 flex-wrap">
            {grounds.map(g => (
                <div
                    key={g.groundId}
                    onClick={() => onSelect(g)}
                    className={`
            cursor-pointer rounded-xl border-1 px-3 py-2
            ${selected?.groundId === g.groundId
                        ? "border-lime-400 bg-lime-400/10"
                        : "border-white/20 hover:border-lime-400/50"}
          `}
                >
                    <p className="font-bold text-sm">{g.name}</p>
                    <p className="text-gray-400 text-xs">{g.sport}</p>
                </div>
            ))}
        </div>
    )
}

export default GroundSelector
