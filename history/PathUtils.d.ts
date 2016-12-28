import { Path, Location, LocationDescriptor } from './';

export function addLeadingSlash(path: Path): Path;
export function stripLeadingSlash(path: Path): Path;
export function stripPrefix(path: Path, prefix: string): Path;
export function addLeadingSlash(path: Path): Path;
export function parsePath(path: Path): Location;
export function createPath(location: LocationDescriptor): Path;
