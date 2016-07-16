/**
 * Contains information for a to-do list item.
 * @param desc {String} - Describes the item.
 * @param state {boolean} - Describes the status of the item.
 * @constructor
 */
function Item(desc, state) {
    var self = this;
    _setDesc(self, desc);
    _setState(self, state);
}

/**
 * Validates and stores the item description.
 * @param self {Object} - Self-references the class.
 * @param setDesc {String} - Description of the item.
 * @throws {Error} - Description is empty.
 * @throws {Error} - Description is not a String.
 * @private
 */
var _setDesc = function(self, setDesc) {
    if (!setDesc) {
        throw new Error("Description cannot be empty.");
    } else if (typeof setDesc !== "string") {
        throw new Error("Description must be a String.");
    } else {
        self._desc = setDesc;
    }
}

/**
 * Validates and sets the item state.
 * @param self {Object} - Self-references the class.
 * @param setState {boolean} - The status of the item.
 * @throws {Error} - State is not a boolean
 * @private
 */
var _setState = function(self, setState) {
    if (!setState) {
        self._status = false;
    } else if (typeof setState !== "boolean") {
        throw new Error("State must be a boolean.");
    } else {
        self._status = setState;
    }
}

/** @private {Object} - References the Item prototype. */
var _i = Item.prototype;

/**
 *  Sets the getters and seters for both the description and the status.
 */
Object.defineProperties(_i, {
    description: {
        get: function() {
            return this._desc;
        }
    },
    finished: {
        get: function() {
            return this._status;
        },
        set: function(newState) {
            _setState(this, newState);
        }
    }
});

/**
 * Toggles the state of the item.
 */
_i.changeState =  function() {
    this.finished = !this.finished;
};

// Exports back to Node.
module.exports = Item;