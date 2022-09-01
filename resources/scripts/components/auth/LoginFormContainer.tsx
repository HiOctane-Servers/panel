import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import { breakpoint } from '@/theme';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    ${breakpoint('sm')`
        ${tw`w-4/5 mx-auto`}
    `};

    ${breakpoint('md')`
        ${tw`p-10`}
    `};

    ${breakpoint('lg')`
        ${tw`w-3/5`}
    `};

    ${breakpoint('xl')`
        ${tw`w-full`}
        max-width: 700px;
    `};
`;

export default forwardRef<HTMLFormElement, Props>((props, ref) => (
    <Container>
        {/* {title && <h2 css={tw`text-3xl text-center text-neutral-100 font-medium py-4`}>{title}</h2>} */}
        <h2 css={tw`grid justify-center font-header p-4 no-underline text-primary-500`}>
            <svg
                className={'w-auto h-8 text-inherit fill-current'}
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='1500.000000pt'
                height='255.000000pt'
                viewBox='0 0 1500.000000 255.000000'
                preserveAspectRatio='xMidYMid meet'
            >
                <g transform='translate(0.000000,255.000000) scale(0.100000,-0.100000)' stroke='none'>
                    <path d='M3140 1280 l0 -1030 880 0 880 0 0 1030 0 1030 -880 0 -880 0 0 -1030z m1290 0 l0 -570 -410 0 -410 0 0 570 0 570 410 0 410 0 0 -570z'></path>
                    <path d='M7170 2080 l0 -230 310 0 310 0 0 -800 0 -800 255 0 255 0 0 800 0 800 300 0 300 0 0 230 0 230 -865 0 -865 0 0 -230z'></path>
                    <path d='M9070 2080 l0 -230 160 0 c88 0 160 -4 160 -8 0 -4 -61 -185 -135 -401 l-135 -394 0 -398 0 -399 235 0 235 0 0 175 0 175 305 0 305 0 0 -175 0 -175 230 0 230 0 0 1030 0 1030 -795 0 -795 0 0 -230z m1130 -625 l0 -395 -290 0 c-159 0 -290 3 -290 8 0 4 50 181 111 395 l112 387 179 0 178 0 0 -395z'></path>
                    <path d='M11000 1280 l0 -1030 235 0 235 0 0 620 c0 341 3 620 6 620 4 0 161 -88 350 -196 l344 -197 0 -423 0 -424 235 0 235 0 0 1030 0 1030 -235 0 -235 0 0 -320 c0 -176 -2 -320 -5 -320 -3 0 -160 88 -350 196 l-345 196 0 124 0 124 -235 0 -235 0 0 -1030z'></path>
                    <path d='M320 1275 l0 -1025 235 0 235 0 0 505 0 505 380 0 380 0 0 -505 0 -505 235 0 235 0 0 1025 0 1025 -235 0 -235 0 0 -290 0 -290 -380 0 -380 0 0 290 0 290 -235 0 -235 0 0 -1025z'></path>
                    <path d='M2340 2070 l0 -230 235 0 235 0 0 230 0 230 -235 0 -235 0 0 -230z'></path>
                    <path d='M5220 1275 l0 -1025 810 0 810 0 0 230 0 230 -575 0 -575 0 0 565 0 565 575 0 575 0 0 230 0 230 -810 0 -810 0 0 -1025z'></path>
                    <path d='M12960 1275 l0 -1025 810 0 810 0 0 230 0 230 -575 0 -575 0 0 155 0 155 523 0 524 0 102 618 c57 339 105 627 108 640 l5 22 -866 0 -866 0 0 -1025z m1160 553 c0 -7 -12 -88 -27 -180 l-26 -168 -319 0 -318 0 0 180 0 180 345 0 c269 0 345 -3 345 -12z'></path>
                    <path d='M2340 915 l0 -665 235 0 235 0 0 665 0 665 -235 0 -235 0 0 -665z'></path>
                </g>
            </svg>
        </h2>
        <FlashMessageRender css={tw`mb-2 px-1`} />
        <Form {...props} ref={ref}>
            <div css={tw`md:flex w-full bg-white shadow-lg rounded-lg p-6 mx-1`}>
                <div css={tw`flex-1`}>{props.children}</div>
            </div>
        </Form>
        <p css={tw`text-center text-neutral-500 text-xs mt-4`}>&copy; 2021 HiOctane Servers</p>
    </Container>
));
