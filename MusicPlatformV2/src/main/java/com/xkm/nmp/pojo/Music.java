package com.xkm.nmp.pojo;

import java.io.Serializable;
import java.util.Date;

public class Music implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long mid;
	private String mname;
	private String author;
	private Integer style;
	private Long uploader;
	private Integer playtimes;
	private Date uploaddate;
	private String lyric;
	private int status;
	
	public Long getMid() {
		return mid;
	}
	public void setMid(Long mid) {
		this.mid = mid;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public Integer getStyle() {
		return style;
	}
	public void setStyle(Integer style) {
		this.style = style;
	}
	public Long getUploader() {
		return uploader;
	}
	public void setUploader(Long uploader) {
		this.uploader = uploader;
	}
	public Integer getPlaytimes() {
		return playtimes;
	}
	public void setPlaytimes(Integer playtimes) {
		this.playtimes = playtimes;
	}
	public Date getUploaddate() {
		return uploaddate;
	}
	public void setUploaddate(Date uploaddate) {
		this.uploaddate = uploaddate;
	}
	public String getLyric() {
		return lyric;
	}
	public void setLyric(String lyric) {
		this.lyric = lyric;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
}
