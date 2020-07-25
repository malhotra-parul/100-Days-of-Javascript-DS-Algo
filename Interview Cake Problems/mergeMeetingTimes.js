const mergeTimings = (meetings) => {
const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);
const mergedMeetings = [sortedMeetings[0]];

for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    if (lastMergedMeeting.endTime >= currentMeeting.startTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    }else{
        mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
};

//Pseudocode:
//sort by startTimes
// loop through the array.. &
//Merge when:
// check if first element's endTime >= second element's startTime =>
//can create a new object where start time comes from first element and end time from second.

console.log(
  mergeTimings([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);
