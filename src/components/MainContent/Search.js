import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { Songs } from "./Album/Songs";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import PlayerContext from "../../context/PlayerContext";
const Search = () => {
  const { currentSong, SetCurrent, playing } = useContext(PlayerContext);
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <div className="mt-[7px] pl-8 mb-10">
      <div className="flex items-center ml-4 mb-2 lg:mb-4">
        <BiSearch className="text-2xl z-10 text-black -mr-9" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="想聽什麼？"
          className="focus:border-neutral-500 border bg-white text-black outline-none pl-11 py-2 pr-4 rounded-full md:w-2/4"
        />
      </div>
      <div className="mb-24 relative top-12 md:top-10 md:left-0 w-9/10 md:w-11/12">
        {search === "" || search === null ? (
          <div>
            <img
              className="w-[75%] h-[75%] tablet:w-[45%] tablet:h-[45%] lg:w-[60%] lg:h-[60%] -mt-7 tablet:mx-0 md:-mt-6"
              src="https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2Fundraw_house_searching_re_stk8.svg?alt=media&token=85c1448c-768b-4a80-9fb2-fadbf44c5508"
            />
          </div>
        ) : (
          <table className="w-[95%] md:w-full -mt-10">
            {Songs.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.songName.toLowerCase().includes(search);
            }).map((song) => (
              <tbody
                key={song?.id}
                onClick={() => SetCurrent(song?.id)}
                className={currentSong === song?.id ? "text-green-500" : ""}
              >
                <tr className="hover:bg-zinc-600  group cursor-pointer">
                  <td className="rounded-l-2xl">
                    <div className="flex items-center md:w-3/4">
                      <p className="ml-2 my-2 px-1 py-[6px] tablet:ml-4 line-clamp-1 font-medium">
                        {song?.songName}
                      </p>
                    </div>
                  </td>
                  <td className="rounded-r-2xl pr-2 text-center lg:pr-1">
                    {song?.songDuration}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default Search;