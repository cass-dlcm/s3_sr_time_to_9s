import {input} from "./inputWidget";

function Calculator(input: input) {
    let results: [[number, number, number]] = [[-1, -1, -1]]
    const simGameCount = 100000;
    let sumTitle = 0;
    let sumGamesClear = 0;
    let numClears = 0;
    let shortestClear = 300;
    let shortestDuration = 144000;
    let sumGames = 0;
    let smell = 0;
    let sumTime = 0;
    let sumTimeClear = 0;
    for (let i = 0; i < simGameCount; i++) {
        let title = 40;
        let j = 0;
        let time = 0;
        while (title < 999 && time < 144000) {
            j++;
            const val = Math.random();
            if (val > input.w1 / 100) {
                smell = Math.min(smell + 1, 5)
                time += 280;
                if (title >= -780) {
                    title -= 20;
                } else {
                    title = -800;
                }
            } else if (val > input.w2 / 100) {
                smell = Math.min(smell + 1, 5)
                time += 380;
                if (title >= -790) {
                    title -= 10;
                } else {
                    title = -800;
                }
            } else if (val <= input.w3 / 100) {
                const bossChance = Math.random();
                switch (smell) {
                    case 0:
                    case 1:
                        smell = Math.min(smell + 1, 5)
                        time += 480;
                        break;
                    case 2:
                        if (bossChance < .1) {
                            smell = 0;
                            time += 580;
                        } else {
                            smell = Math.min(smell + 1, 5)
                            time += 480;
                        }
                        break;
                    case 3:
                        if (bossChance < .3) {
                            smell = 0;
                            time += 580;
                        } else {
                            smell = Math.min(smell + 1, 5)
                            time += 480;
                        }
                        break;
                    case 4:
                        if (bossChance < .6) {
                            smell = 0;
                            time += 580;
                        } else {
                            smell = Math.min(smell + 1, 5)
                            time += 480;
                        }
                        break;
                    case 5:
                        smell = 0;
                        time += 580;
                }
                if (title <= 979) {
                    title += 20;
                } else {
                    title = 999;
                }
            } else {
                smell++
            }
        }
        results.push([j, title, time]);
        if (title == 999) {
            if (shortestDuration > time) {
                shortestClear = j;
                shortestDuration = time;
            }
            numClears += 1;
            sumGamesClear += j;
            sumTimeClear += time;
        } else {
        }
        sumGames += j;
        sumTitle += title;
        sumTime += time;
    }
    return <div>
        <ul>
            {sumGamesClear > 0 && <li>Average games on success: {sumGamesClear / numClears}</li>}
            <li>Average ending title: {function () {
                if (sumTitle / simGameCount >= 0) {
                    return "Eggsecutive VP " + sumTitle / simGameCount;
                }
                if (sumTitle / simGameCount >= -100) {
                    return "Profreshional +3 " + (sumTitle / simGameCount + 100);
                }
                if (sumTitle / simGameCount >= -200) {
                    return "Profreshional +2 " + (sumTitle / simGameCount + 200);
                }
                if (sumTitle / simGameCount >= -300) {
                    return "Profreshional +1 " + (sumTitle / simGameCount + 300);
                }
                if (sumTitle / simGameCount >= -400) {
                    return "Profreshional Part-Timer " + (sumTitle / simGameCount + 400);
                }
                if (sumTitle / simGameCount >= -500) {
                    return "Overachiever " + (sumTitle / simGameCount + 500);
                }
                if (sumTitle / simGameCount >= -600) {
                    return "Go-Getter " + (sumTitle / simGameCount + 600);
                }
                if (sumTitle / simGameCount >= -700) {
                    return "Part-Timer " + (sumTitle / simGameCount + 700);
                }
                if (sumTitle / simGameCount >= -800) {
                    return "Apprentice " + (sumTitle / simGameCount + 800);
                }
                return sumTitle / simGameCount;
            }()}</li>
            {sumTimeClear > 0 && <li>Average time spent on
                success: {Math.floor(sumTimeClear / 3600 / numClears)} hours, {Math.ceil((sumTimeClear / 60 / numClears) % 60)} minutes</li>}
            <li>Average time
                spent: {Math.floor(sumTime / 3600 / simGameCount)} hours, {Math.ceil((sumTime / 60 / simGameCount) % 60)} minutes
            </li>
            <li>Success percentage: {numClears / simGameCount * 100}% ({numClears} successes out
                of {simGameCount} attempts)
            </li>
            {numClears > 0 && <li>Shortest number of games: {shortestClear}</li>}
            {numClears > 0 && <li>Time spent for shortest number of
                games: {Math.floor(shortestDuration / 3600)} hours, {Math.ceil((shortestDuration / 60) % 60)} minutes
            </li>}
        </ul>
        <ol>
            {results.map((values, index) => {
                if (values[0] != -1) {
                    return <li key={index}>{`Games: ${values[0]}, Resulting Title: ${function () {
                        if (values[1] >= 0) {
                            return "Eggsecutive VP " + values[1];
                        }
                        if (values[1] >= -100) {
                            return "Profreshional +3 " + (values[1] + 100);
                        }
                        if (values[1] >= -200) {
                            return "Profreshional +2 " + (values[1] + 200);
                        }
                        if (values[1] >= -300) {
                            return "Profreshional +1 " + (values[1] + 300);
                        }
                        if (values[1] >= -400) {
                            return "Profreshional Part-Timer " + (values[1] + 400);
                        }
                        if (values[1] >= -500) {
                            return "Overachiever " + (values[1] + 500);
                        }
                        if (values[1] >= -600) {
                            return "Go-Getter " + (values[1] + 600);
                        }
                        if (values[1] >= -700) {
                            return "Part-Timer " + (values[1] + 700);
                        }
                        if (values[1] >= -800) {
                            return "Apprentice " + (values[1] + 800);
                        }
                        return values[1];
                    }()}, Estimated
                        Time: ${Math.floor(values[2] / 3600)} hours, ${Math.ceil((values[2] / 60) % 60)} minutes`}</li>
                }
            })}
        </ol>
    </div>
}

export default Calculator;