import fsExtra from 'fs-extra';

import { EvernoteNoteData, NoteData } from './../models';
import { getHtmlFilePath } from '.';
import { writeFile } from './file-utils';
import * as utils from './index';

export const saveHtmlFile = (noteData: NoteData, note: EvernoteNoteData) => {
    if (noteData.htmlContent) {
        utils.clearResourceDir(note);
        const absoluteResourceWorkDir = utils.getAbsoluteResourceDir(note);
        fsExtra.mkdirsSync(absoluteResourceWorkDir);
        const absHtmlFilePath = getHtmlFilePath(note);
        writeFile(absHtmlFilePath, noteData.htmlContent, note);
    }
};
