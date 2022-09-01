import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded no-underline text-neutral-200 items-center bg-primary-500/10 p-4 border border-transparent transition-colors duration-150 overflow-hidden`};

    ${(props) => props.$hoverable !== false && tw`hover:border-primary-500`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-primary-500 p-3`};
    }
`;
