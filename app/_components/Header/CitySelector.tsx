"use client";

type TCityGroup = {
  letter: string;
  cities: string[];
};

const data: TCityGroup[] = [
  { letter: "А", cities: ["Актау"] },
  { letter: "Е", cities: ["Екатеринбург"] },
  { letter: "К", cities: ["Кемерово", "Когалым", "Курган"] },
  { letter: "М", cities: ["Магнитогорск", "Москва"] },
  {
    letter: "Н",
    cities: ["Новосибирск", "Новый Уренгой", "Ноябрьск", "Новокузнецк"],
  },
  { letter: "О", cities: ["Обнинск", "Омск"] },
  { letter: "С", cities: ["Самара", "Советский", "Сургут"] },
  { letter: "Т", cities: ["Тарко-Сале", "Тюмень"] },
  { letter: "У", cities: ["Урай", "Уфа"] },
  { letter: "Х", cities: ["Химки"] },
  { letter: "Ч", cities: ["Челябинск"] },
  { letter: "Я", cities: ["Ялуторовск"] },
];

function splitBalanced(groups: TCityGroup[], columnsCount: number) {
  const columns: TCityGroup[][] = Array.from(
    { length: columnsCount },
    () => [],
  );
  const heights = new Array(columnsCount).fill(0);

  for (const group of groups) {
    const weight = 1 + group.cities.length;

    let minIdx = 0;
    for (let i = 1; i < columnsCount; i++) {
      if (heights[i] < heights[minIdx]) minIdx = i;
    }

    columns[minIdx].push(group);
    heights[minIdx] += weight;
  }

  return columns;
}

export default function CitySelector() {
  const columns = splitBalanced(data, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2.5">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-6">
          {col.map((group) => (
            <div key={group.letter} className="flex flex-col gap-2.5">
              <span className="text-[16px] font-circe font-medium text-[#C9B8AE]">
                {group.letter}
              </span>

              {group.cities.map((city) => (
                <button
                  key={city}
                  className={[
                    "block text-left text-[16px] font-circe transition-colors hover:text-[#A09790]",
                    "Москва" === city ? "text-[#A09790]" : "text-black",
                  ].join(" ")}
                >
                  {city}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
