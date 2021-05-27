import React from 'react';
import { ModalPlane, Close, Input, Header, Content, ContentB, SelectBox, SubmitButton } from "./invest.style";

export default function InvestForm({ show, close }) {
    return (
        <div>
            <ModalPlane control={show}>
                <Close onClick={close}>x</Close>
                <Header>Invest now</Header>
                <Content>Kindly specify the investment amount and funding source in the form below.
                     The minimum investment amount is N 100,000.</Content>
                <ContentB>How much do you want to invest?</ContentB>
                <Input />
                <ContentB>Select a funding source</ContentB>
                <SelectBox>
                    <option>
                        Select a funding source
                    </option>
                </SelectBox>
                <ContentB>When would you like your interest paid?</ContentB>
                <SelectBox>
                    <option>
                        Select option
                    </option>
                    <option>
                        180 days
                    </option>
                    <option>
                        270 days
                    </option>
                    <option>
                        360 days
                    </option>
                </SelectBox>
                <Content adjust>By clicking the make investment button you agree to the Mkobo investment <a href="#">Terms and Conditions</a> </Content>
                <SubmitButton>Make investment </SubmitButton>
            </ModalPlane>
        </div>
    )
}
