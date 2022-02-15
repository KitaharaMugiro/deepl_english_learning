// @ts-ignore
import TextSelector from 'text-selection-react';
import { isMobile } from "react-device-detect";

export default () => {
    if (!process.browser) return null;

    const onSearchOnDictionary = (html: any, text: string) => {
        window.open('https://ejje.weblio.jp/content/' + text, '_blank');
    }

    return <>
        {!isMobile &&
            <TextSelector
                events={[
                    {
                        text: '辞書で調べる',
                        handler: onSearchOnDictionary
                    }
                ]}
                colorText={false}
            />}

    </>
}