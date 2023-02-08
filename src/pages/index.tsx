import * as React from "react";
import Layout from "@/components/layout";
import List from "@/components/list";
import emojisData from "@/data/emojis";
import CategoryCard from "@/components/categoryCard";

export default function Home() {
  const [filteredEmojis, setFilteredEmojis] = React.useState(emojisData.slice(0,1500));

  function handleFilterBySearch(search: string) {
    if (search.trim().length > 0) {

      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );

    } else {
      setFilteredEmojis(emojisData)
    }
  }

function handleFilterByCategory(category:string) {
  setFilteredEmojis( emojisData.filter((emoji)=> emoji.group.toUpperCase().includes(category.toUpperCase()))
  )

}



  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-700 text-center tracking-wide">
        Welcome to Infoji
      </h1>
      <div className="flex justify-center ">
        <input
          className="w-full max-w-xl border border-gray-300 p-2 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          type="text"
          id="name"
          placeholder="Search for an emoji"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">

      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='😀'
      group={"Smileys & Emotion"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🙍🏻'
      group={"People & Body"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🐵'
      group={"Animals & Nature"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🍇'
      group={"Food & Drink"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🎖️'
      group={"Activities"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🌍'
      group={"Travel & Places"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='👜'
      group={"Objects"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='⚠️'
      group={"Symbols"} />
      <CategoryCard
      handleFilter={handleFilterByCategory}
      emoji='🚩'
      group={"Flags"} />
      <CategoryCard
      handleFilter={()=>setFilteredEmojis(emojisData.slice(0,1500))}
      emoji='♾️'
      group={"Show All"} />

      </div>
      <List emojis={filteredEmojis.slice(0,1500)} />
    </Layout>
  );
}
