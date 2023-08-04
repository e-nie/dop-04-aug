import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";
import {S} from './_Styled'

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <S.Banknote color={props.money.banknotes === 'Dollars'? 'lawngreen' : 'steelblue'}>
            <S.Name>{props.money.banknotes}</S.Name>
            <S.Nominal>{props.money.value}</S.Nominal>
        </S.Banknote>
    );
};


// const Banknote = styled.div`
//   background-color: ${props => {
//       // if(props.color === 'lawngreen') {
//       //     return 'lawngreen'
//       // } else {
//       //     return 'steelblue'
//       // }
//     return props.color
//   }};
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const Name = styled.span`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
// `
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
//   font-size: 90px;
// `


//______________________OLD CODE___________________________________________________//


// import React from 'react';
// import {MoneyType} from "./App";
// import styled from "styled-components";
// import {S} from './_Styled'
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === 'Dollars'
//             ? <BanknoteGreen>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </BanknoteGreen>
//             : <BanknoteBlue>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </BanknoteBlue>
//
//     );
// };


// const BanknoteGreen = styled.div`
//   background-color: lawngreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
// const BanknoteBlue = styled.div`
//   background-color: #5cb6ec;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const Name = styled.span`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
// `
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
//   font-size: 90px;
// `
