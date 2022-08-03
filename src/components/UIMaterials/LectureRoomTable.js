import React from 'react';

import './LectureRoomTable.css';

const LectureRoomTable = (props) => {
    console.log(props.day)
    return (
        <div class="info">
        <table class="roomtable">
          <thead>
            <tr>
              <th class="date-title">날짜</th>
              <th class="time-title">시간</th>
              <th class="place-title">장소</th>
              <th class="person-title">신청자</th>
              <th class="assign-room">신청하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="date" rowSpan="8">
              {props.day.getFullYear()}-{("0" + (props.day.getMonth() + 1)).slice(-2)}-
                {("0" + props.day.getDate()).slice(-2)}
              </td>
              <td class="period" rowSpan="4">
                1자습 (19:00 ~ 21:00)
              </td>
              <td class="content">지하 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">2층 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">4층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">10층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="period" rowSpan="4">
                2자습 (22:00 ~ 23:50)
              </td>
              <td class="content">지하 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">2층 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">4층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">10층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default LectureRoomTable;