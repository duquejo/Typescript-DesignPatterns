interface IVideoProvider {
	getPlaylist(code: string): Promise<string[]>;
}

export { IVideoProvider };
