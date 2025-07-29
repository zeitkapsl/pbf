
export function readTypeString(pbf, end) {
    return pbf.readFields(readTypeStringField, {int: "0", long: "0", boolVal: false, float: "0", default_implicit: "0", default_explicit: "42"}, end);
}
function readTypeStringField(tag, obj, pbf) {
    if (tag === 1) obj.int = pbf.readVarint(true).toString();
    else if (tag === 2) obj.long = pbf.readVarint64(true).toString();
    else if (tag === 3) obj.boolVal = pbf.readBoolean();
    else if (tag === 4) obj.float = pbf.readFloat().toString();
    else if (tag === 5) obj.default_implicit = pbf.readVarint(true).toString();
    else if (tag === 6) obj.default_explicit = pbf.readVarint(true).toString();
}
export function writeTypeString(obj, pbf) {
    if (obj.int != null && obj.int !== "0") pbf.writeVarintField(1, parseInt(obj.int, 10));
    if (obj.long != null && obj.long !== "0") pbf.writeVarintField(2, BigInt(obj.long));
    if (obj.boolVal) pbf.writeBooleanField(3, obj.boolVal);
    if (obj.float != null && obj.float !== "0") pbf.writeFloatField(4, parseFloat(obj.float));
    if (obj.default_implicit != null && obj.default_implicit !== "0") pbf.writeVarintField(5, parseInt(obj.default_implicit, 10));
    if (obj.default_explicit != null && obj.default_explicit !== "42") pbf.writeVarintField(6, parseInt(obj.default_explicit, 10));
}

export function readTypeNotString(pbf, end) {
    return pbf.readFields(readTypeNotStringField, {int: 0, long: 0, boolVal: false, float: 0}, end);
}
function readTypeNotStringField(tag, obj, pbf) {
    if (tag === 1) obj.int = pbf.readVarint(true);
    else if (tag === 2) obj.long = pbf.readVarint64(true);
    else if (tag === 3) obj.boolVal = pbf.readBoolean();
    else if (tag === 4) obj.float = pbf.readFloat();
}
export function writeTypeNotString(obj, pbf) {
    if (obj.int) pbf.writeVarintField(1, obj.int);
    if (obj.long) pbf.writeVarintField(2, obj.long);
    if (obj.boolVal) pbf.writeBooleanField(3, obj.boolVal);
    if (obj.float) pbf.writeFloatField(4, obj.float);
}
