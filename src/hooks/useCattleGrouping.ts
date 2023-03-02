import dayjs from "dayjs";
import { useAppSelector } from "src/store/store";
import { Cattle, CattleList } from "src/types";

const getUnconfirmedCattle = (cattleList: CattleList) =>
  cattleList.filter((cattle) => cattle.status === "DETECTED");

const getDateString = (date: Date) => dayjs(date).format("YYYY-MM-DD");

export const useCattleGrouping = () => {
  const { cattleList } = useAppSelector((state) => state.timeline);

  const unconfirmedCattles = getUnconfirmedCattle(cattleList);

  // Group cows data based on date of first heat detection
  const dateBasedGrouping = cattleList
    .filter((cattle) => cattle.status !== "DETECTED") // Filter out the unconfirmed cows
    .reduce(
      (result: { [date: string]: Cattle[] }, cattle) => ({
        ...result,
        [getDateString(cattle.firstDetectedAt)]: [
          ...(result[getDateString(cattle.firstDetectedAt)] ?? []),
          cattle,
        ],
      }),
      {}
    );

  return { dateBasedGrouping, unconfirmedCattles };
};
