/**
 * Created by jennifer.allen on 6/16/2016.
 */
import * as types from './actionTypes';

export function beginAjaxCall() {
    return { type: types.BEGIN_AJAX_CALL };
}
export function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}