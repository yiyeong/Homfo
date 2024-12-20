import { fetchFromApi } from "@homfo-client/util";
-> fetchFromApi: API 서버와 통신을 도와주는 도구 
-> @homfo-client/util 없는 모듈이라고 에러발생함
import { ITotalEmployee, employee } from "../../store/type/employee/type";

interface employeeParams {
  page: number;                -> 요청할 페이지 번호
  size: number;                -> 한 페이지에 가져올 데이터 수
  sort?: string[];             -> 정렬 기준(?)
  needCount: boolean;          -> 직원 수를 가져올지 여부
  searchName?: string;         -> 특정 이름으로 검색
  employeeStatus?: string;     -> 직원의 상태 (활성/비활성)
}
-> 직원 데이터를 요청할 때 필요한 조건들 정의하는 인터페이

export : 함수가 다른 파일에서도 사용할 수 있도록 내보내는 역할
getEmployeesInfo: 비동기함수
export const getEmployeesInfo = async (
  params: employeeParams,        // API 호출에 필요한 요청 조건들을 담고있는 객체
  setEmployeeData: React.Dispatch<React.SetStateAction<employee[] | undefined>>,
  //React의 상태를 업데이트하는 함수, 가져온 직원 데이터를 화면에 표시하기 위해 React컴포넌트의 상태에 저장
  setTotalData: React.Dispatch<React.SetStateAction<ITotalEmployee | undefined>>
  //전체 데이터의 메타정보를 상태에 저장하기 위한 함수
) => {
  try {
    const res = await fetchFromApi(
      "GET",                              -> 서버에 GET을 보냄
      "/employees/infos/search/pages",    -> 보내는 경로
      undefined,
      params
    );
    setTotalData(res.data);               -> 서버가 응답하면 전체데이터를 저장하는 곳
    setEmployeeData(res.data.data);       -> 서버가 응답하면 개별 직원 데이터를 저장하는 곳
  } catch (error: unknown) {              -> 응답하지 않으면 에러를 콘솔에 출력
    console.log(error);
  }
};
-> 직원 데이터를 가져와서 React 상태 관리 도구에 저장

export const approveEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi(
      "PATCH",                                        -> PATCH 요청을 보냄
      `/employees/register/approve/${targetId}`       -> 요청 대상 ID는 targetId
    );
    if (res.status === 200) {                         -> 서버에서 200응답(성공)이 오면 true 반환
      return true;
    }
  } catch (error: unknown) {                          -> 실패시 콘솔에 에러를 출력하고  false 반환
    console.log(error);
    return false;
  }
};
-> 특정 직원의 '승인'을 처리

export const stopEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi(
      "PATCH",
      `/employees/accounts/stop/${targetId}`
    );
    if (res.status === 200) {
      return true;
    }
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};
-> 특정 직원 계정을 "정지" 처리

export const unstopEmployee = async (targetId: number) => {
  try {
    const res = await fetchFromApi(
      "PATCH",
      `/employees/accounts/unstop/${targetId}`
    );
    if (res.status === 200) {
      console.log("정지 해제");
      return true;
    }
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};
-> 특정 직원 계정을 다시 활성화하는 코드 
