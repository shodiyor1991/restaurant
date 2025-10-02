import { IoIosSearch } from "react-icons/io"
import { Container } from "../../widgets/container"
import { restaurantData } from "../../defaaults/restaurant.data"
import { useState } from "react"
import { ListsItem } from "./list-item"

export const Lists = () => {

    const [search, setSearch] = useState("");

    const filtered = search ? restaurantData.filter(res => res.title.toLowerCase().includes(search.toLowerCase())) : restaurantData;

    return <section>
        <Container>
            <div className="space-y-10">
                {/*Top*/}
                <div className="flex justify-between items-center">
                    <h2 className="text-[36px] font-bold">
                        Ресторана
                    </h2>

                    <form className="w-[360px]">
                        <label className="inline-block relative w-full"
                        >
                            <input type="search"
                                value={search}
                                onChange={event => setSearch(
                                    event.currentTarget.value
                             )}
                                placeholder="Поиск блюд и ресторанов"
                                className="inline-block w-full py-[5px] pl-[32px] pr-[12px] bg-white border border-[#d9d9d9] rounded-[2px]"

                            />

                            <IoIosSearch className="absolute top-1/2 -translate-y-1/2 left-2.5" />

                        </label>
                    </form>
                </div>

                <ul className="grid grid-cols-3 gap-6">
                    {
                        filtered.map(item => <ListsItem key={item.id} {...item} />)
                    }
                </ul>

            </div>
        </Container>
    </section>
}